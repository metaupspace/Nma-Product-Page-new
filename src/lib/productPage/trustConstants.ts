export type TrustCard = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

export const initialTrustCards: TrustCard[] = [
  {
    id: 1,
    name: '[Name]',
    role: 'Chief Operating Officer at [Enterprise Group]',
    quote:
      "We see pitches for AI tools every week, but almost all of them are black boxes. In our world, you can't take unverified AI outputs to an Investment Committee. ConvoSynth is the exception. The data validation layer and built-in audit trails mean when we pull an LP report, we can defend every single data point.",
    avatar: '/assets/productPage/avatar.png',
  },
  {
    id: 2,
    name: '[Name]',
    role: 'Chief Operating Officer at [Enterprise Group]',
    quote:
      "We see pitches for AI tools every week, but almost all of them are black boxes. In our world, you can't take unverified AI outputs to an Investment Committee. ConvoSynth is the exception. The data validation layer and built-in audit trails mean when we pull an LP report, we can defend every single data point.",
    avatar: '/assets/productPage/avatar.png',
  },  {
    id: 3,
    name: '[Name]',
    role: 'Chief Operating Officer at [Enterprise Group]',
    quote:
      "We see pitches for AI tools every week, but almost all of them are black boxes. In our world, you can't take unverified AI outputs to an Investment Committee. ConvoSynth is the exception. The data validation layer and built-in audit trails mean when we pull an LP report, we can defend every single data point.",
    avatar: '/assets/productPage/avatar.png',
  }, {
    id: 4,
    name: '[Name]',
    role: 'Chief Operating Officer at [Enterprise Group]',
    quote:
      "We see pitches for AI tools every week, but almost all of them are black boxes. In our world, you can't take unverified AI outputs to an Investment Committee. ConvoSynth is the exception. The data validation layer and built-in audit trails mean when we pull an LP report, we can defend every single data point.",
    avatar: '/assets/productPage/avatar.png',
  },
];

let nextId = 5;

// Simulated async fetch to get more cards. In a real app this would call an API.
export async function fetchMoreTrustCards(count = 2): Promise<TrustCard[]> {
  await new Promise((r) => setTimeout(r, 400));
  const cards: TrustCard[] = Array.from({ length: count }).map(() => ({
    id: nextId++,
    name: `[Name]`,
    role: 'Chief Operating Officer at [Enterprise Group]',
    quote:
      "We see pitches for AI tools every week, but almost all of them are black boxes. In our world, you can't take unverified AI outputs to an Investment Committee.",
    avatar: '/assets/avatars/avatar-1.png',
  }));
  return cards;
}
