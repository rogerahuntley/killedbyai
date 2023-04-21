import { loadEverything } from '$lib/scripts/github';

export const load = async () => {
  const everything = await loadEverything();

  return {
      ...everything
  };
}