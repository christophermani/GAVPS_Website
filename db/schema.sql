CREATE TABLE IF NOT EXISTS foundation_submissions (
  id CHAR(36) NOT NULL PRIMARY KEY,
  kind ENUM('volunteer', 'donor', 'contact', 'newsletter', 'partner', 'event') NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NULL,
  city VARCHAR(1000) NULL,
  interest VARCHAR(1000) NULL,
  skills VARCHAR(1000) NULL,
  availability VARCHAR(1000) NULL,
  message VARCHAR(1000) NULL,
  blood_group VARCHAR(16) NULL,
  consent TINYINT(1) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_foundation_submissions_email_created (email, created_at)
);
