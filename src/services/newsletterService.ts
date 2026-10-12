const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface NewsletterResult {
  success: boolean;
  message: string;
}

export const newsletterService = {
  async subscribe(email: string): Promise<NewsletterResult> {
    const trimmed = email.trim();
    if (!trimmed || !EMAIL_REGEX.test(trimmed)) {
      return {
        success: false,
        message: 'Please enter a valid email address.'
      };
    }

    await new Promise((resolve) => setTimeout(resolve, 600));

    return {
      success: true,
      message: 'Welcome to the Aura Botanica Circle. Your 10% welcome privilege code has been generated.'
    };
  }
};
