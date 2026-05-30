export type Candidate = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  position: string;
  linkedin_url: string;
  cv_url: string;
  experience_years: number;
  applied_at: string;
  status: string;
  stage: string;
};

export type Note = {
  id: string;
  content: string;
  created_at: string;
};
