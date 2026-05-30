import type { Candidate, Note } from "@/types/candidate";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  if (res.status === 204) {
    return undefined as T;
  }
  return res.json() as Promise<T>;
}

export function getRecords(): Promise<{ data: Candidate[] }> {
  return request("/records");
}

export function getRecord(id: string): Promise<Candidate> {
  return request(`/records/${id}`);
}

export function createRecord(data: Partial<Candidate>): Promise<Candidate> {
  return request("/records", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateRecord(id: string, data: Partial<Candidate>): Promise<Candidate> {
  return request(`/records/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export function patchRecord(id: string, data: Partial<Candidate>): Promise<Candidate> {
  return request(`/records/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export function getNotes(id: string): Promise<{ data: Note[] }> {
  return request(`/records/${id}/notes`);
}

export function addNote(id: string, content: string): Promise<Note> {
  return request(`/records/${id}/notes`, {
    method: "POST",
    body: JSON.stringify({ content }),
  });
}

export function deleteNote(id: string, noteId: string): Promise<void> {
  return request(`/records/${id}/notes/${noteId}`, {
    method: "DELETE",
  });
}
