export interface FaqItem {
  question: string
  answer: string
}

export const ALL_FAQS: FaqItem[] = [
  {
    question: 'What is Chess Lens?',
    answer: 'Chess Lens is a free, local-first desktop chess analysis workstation for macOS and Windows. Unlike browser-based tools that review one game at a time, Chess Lens analyzes your entire game history to surface recurring mistake patterns, makes every game fully searchable, and shows you how you actually think—not just what the best move was. It runs entirely on your machine using Stockfish and Maia engines.',
  },
  {
    question: 'How do I download Chess Lens?',
    answer: 'Download Chess Lens from chesslens.org/download. You can download directly for macOS (.dmg) or Windows (.exe installer). Once downloaded, open the installer and follow the on-screen instructions. No account or internet connection is required to run the app after installation.',
  },
  {
    question: 'Which operating systems are supported?',
    answer: 'Chess Lens supports macOS (10.15 Catalina and later) and Windows (Windows 10 and later, 64-bit). Linux support is not currently planned. Make sure your machine has at least 4 GB of RAM and a modern multi-core CPU for the best analysis performance.',
  },
  {
    question: 'Is Chess Lens free?',
    answer: 'Yes, Chess Lens is completely free. There is no subscription, no paywall, and no feature limits. Analysis runs entirely on your own hardware using locally installed engines—there are no cloud computing costs to pass on.',
  },
  {
    question: 'Do I need an internet connection to use Chess Lens?',
    answer: 'An internet connection is only needed to sync games from Chess.com. All analysis—Stockfish evaluation, Maia predictions, pattern detection—runs entirely offline on your machine. Once your games are synced, you can analyze, study, and browse your library without any network connection.',
  },
  {
    question: 'How do I update Chess Lens to the latest version?',
    answer: 'Chess Lens will notify you when a new version is available. You can also check chesslens.org/download or the GitHub releases page at any time to download the latest version manually. Updates are standalone installers—just download and run the new version.',
  },
  {
    question: 'Are the macOS and Windows builds notarized or code-signed?',
    answer: 'Yes. The macOS build is code-signed and notarized by Apple, so it passes Gatekeeper without any "unidentified developer" warnings. The Windows build is code-signed as well. If your system still shows a warning on first launch, right-click the installer and choose Open.',
  },
  {
    question: 'Which chess engines does Chess Lens use?',
    answer: 'Chess Lens uses two engines: Stockfish (the strongest open-source chess engine) for objective position evaluation and best-move analysis, and Maia (developed at Cornell and the University of Toronto) for human-like move predictions. Maia models are available for ratings 1100 through 1900, letting you see not just what the best move was but how likely a player at your level was to find it.',
  },
  {
    question: 'What are Maia engines and why does Chess Lens use them?',
    answer: 'Maia is a series of chess engines trained to predict how human players at specific rating levels actually move—rather than what the objectively best move is. When Chess Lens overlays Maia on your eval curve, you can see the positions where a 1500-rated player almost certainly plays the wrong move, helping you understand which of your mistakes are genuinely hard and which ones are avoidable patterns in your own play.',
  },
  {
    question: 'How does Chess Lens connect to Chess.com?',
    answer: 'You enter your Chess.com username in the app and Chess Lens uses the Chess.com public API to sync your game history. No password is required. Games are downloaded and stored locally on your machine. Lichess integration is on the roadmap.',
  },
  {
    question: 'Where are my games and analysis stored?',
    answer: 'Everything—your synced games, analysis results, saved variations, and pattern data—is stored locally in a database on your own machine. Nothing is sent to any external server. You have full control over your data.',
  },
  {
    question: 'How do recurring mistake patterns work?',
    answer: 'After analyzing your games, Chess Lens groups positions where you made a significant mistake by the type of position and the underlying tactical or strategic theme (e.g. loose pieces, king safety, calculation failures). Each pattern shows how often it appears, your average centipawn loss, and links to every game instance—so you can drill into exactly where and why you go wrong in those structures.',
  },
  {
    question: 'How is Chess Lens different from Chess.com or Lichess game review?',
    answer: 'Chess.com and Lichess analyze one game at a time and show you engine evaluation. Chess Lens analyzes your entire history and answers the bigger question: what patterns of mistakes keep repeating across your games? It also uses Maia to show human-level mistake probability (not just engine evaluation), groups similar positions into recurring themes, and makes your whole game library searchable and filterable.',
  },
  {
    question: 'How is Chess Lens different from ChessBase?',
    answer: 'ChessBase is a powerful professional tool, but it requires manual tagging, curation, and significant setup to get insights from your own games. Chess Lens does that work automatically—it imports, analyzes, and groups your games into recurring patterns without any manual database management. It is also free and designed specifically for self-improvement rather than professional game preparation.',
  },
]
