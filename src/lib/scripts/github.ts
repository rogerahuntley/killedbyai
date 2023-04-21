import { readable, writable } from "svelte/store";

type GHIssue = {
  id: number;
  comments: number;
  body: string;
  user: {
    id: number;
    login: string;
    avatar_url: string;
  };
  created_at: string;
  updated_at: string;
}

type GHComment = {
  id: number;
  body: string;
  user: {
    id: number;
    login: string;
    avatar_url: string;
  };
  created_at: string;
  updated_at: string;
}

const repo = 'rogerahuntley/killedbyai';
const issueId = 1;

const commentsPerPage = 1;

const issueStore = writable<GHIssue | null>(null);
const commentsStore = writable<GHComment[]>([]);

const loadIssue = async () => {
  const response = await fetch(`https://api.github.com/repos/${repo}/issues/${issueId}`);
  const issue = await response.json();

  issueStore.set(issue);
  return issue as GHIssue;
};

const loadComments = async (page = 1) => {
  const response = await fetch(`https://api.github.com/repos/${repo}/issues/${issueId}/comments?per_page=${commentsPerPage}&page=${page}`);
  const comments = await response.json();

  return comments as GHComment[]
};

const loadEverything = async () => {
  let page = 1;
  const issue = await loadIssue();
  const allComments: GHComment[] = [];
  if (issue.comments > 0) {
    while ((page - 1) * commentsPerPage < issue.comments) {
      const comments: GHComment[] = await loadComments(page);
      allComments.push(...comments);
      page++;
    }

    commentsStore.set(allComments);
    return { issue: issue, comments: allComments };
  };
};

export type { GHIssue, GHComment };
export { issueStore, commentsStore, loadEverything };