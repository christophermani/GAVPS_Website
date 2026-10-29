import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, LoaderCircle, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submissionSchema, type Submission } from "@/lib/submission-schema";
import { services } from "@/lib/foundation";
export function ApplicationForm({ kind }: { kind: Submission["kind"] }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Submission>({
    resolver: zodResolver(submissionSchema),
    defaultValues: { kind, consent: false, website: "" },
  });
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);
  const isApplication = kind === "volunteer" || kind === "donor";
  const field = (name: keyof Submission, label: string, type = "text") => (
    <label>
      {label}
      <input
        {...register(name)}
        type={type}
        autoComplete={
          name === "name"
            ? "name"
            : name === "email"
              ? "email"
              : name === "phone"
                ? "tel"
                : undefined
        }
        aria-invalid={!!errors[name]}
      />
      {errors[name] && (
        <span className="error-text" role="alert">
          {errors[name]?.message}
        </span>
      )}
    </label>
  );
  if (result?.ok)
    return (
      <div className="success-box" role="status">
        <CheckCircle2 className="mb-3" />
        <h3 className="font-semibold">Thank you for making a difference.</h3>
        <p className="mt-2 text-sm leading-7">{result.message}</p>
      </div>
    );
  return (
    <form
      className="form"
      onSubmit={handleSubmit(async (data) => {
        setResult(null);
        try {
          const response = await fetch("/api/submissions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          const payload = (await response.json()) as { ok?: boolean; message?: string };
          setResult({
            ok: payload.ok === true,
            message:
              payload.message ?? "We could not save your submission. Please try again later.",
          });
        } catch {
          setResult({
            ok: false,
            message: "We could not save your submission. Please try again later.",
          });
        }
      })}
      noValidate
    >
      <input type="hidden" {...register("kind")} />
      <div hidden>
        <input {...register("website")} tabIndex={-1} autoComplete="off" />
      </div>
      {field("name", "Full Name *")}
      {field("email", "Email Address *", "email")}
      {kind !== "newsletter" &&
        field("phone", isApplication ? "Phone Number *" : "Phone Number", "tel")}
      {kind !== "newsletter" && field("city", isApplication ? "City *" : "City")}
      {kind === "volunteer" && (
        <>
          <label>
            Area of Interest *
            <select {...register("interest")}>
              <option value="">Select your interest</option>
              {services.map((s) => (
                <option key={s.slug}>{s.title}</option>
              ))}
            </select>
            {errors.interest && (
              <span className="error-text" role="alert">
                {errors.interest.message}
              </span>
            )}
          </label>
          {field("skills", "Skills")}
        </>
      )}
      {kind === "donor" && (
        <label>
          Blood Group (optional)
          <select {...register("blood_group")}>
            <option value="">Select blood group</option>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Unknown"].map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </label>
      )}
      {isApplication && field("availability", "Preferred Availability *")}
      {kind !== "newsletter" && (
        <label className="full">
          {kind === "volunteer" ? "What motivates you to volunteer?" : "Your Message"}
          {["contact", "partner"].includes(kind) ? " *" : ""}
          <textarea {...register("message")} maxLength={1000} />
          {errors.message && (
            <span className="error-text" role="alert">
              {errors.message.message}
            </span>
          )}
        </label>
      )}
      <div className="full">
        <label className="consent">
          <input type="checkbox" {...register("consent")} />
          <span>
            I consent to GAVPS Foundation securely storing these details and contacting me about
            this enquiry. I have read the{" "}
            <a className="text-primary underline" href="/privacy-policy">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <span className="error-text" role="alert">
            {errors.consent.message}
          </span>
        )}
      </div>
      {result && !result.ok && (
        <p className="full error-text" role="alert">
          {result.message}
        </p>
      )}
      <div className="full flex flex-wrap items-center gap-5">
        <Button disabled={isSubmitting} type="submit" size="lg">
          {isSubmitting ? <LoaderCircle className="animate-spin" /> : <ArrowRight />}
          {isSubmitting
            ? "Submitting…"
            : kind === "volunteer"
              ? "Submit Application"
              : kind === "donor"
                ? "Register My Interest"
                : "Send Message"}
        </Button>
        <span className="flex items-center gap-2 text-xs text-muted-foreground">
          <LockKeyhole size={13} />
          Your information stays private.
        </span>
      </div>
    </form>
  );
}
