Here is what the app currently has implemented right now:

Free
What it doessyncs all games from chess.com, lichess integration coming soon

Pipeline for analyzing games automatically, uses your computers hardware so it’s free and is offlineruns the latest stockfish engine for finding the best lines, and Maia engines from ratings 1100 - 1900 for understanding human lines
See your common play patterns and trends from recent games on an insights page
Helps answer the question, what should I work on.
Surfaces repeated mistake patterns from recent games and links to 
1. Groups together similar positions you play so that you can see your patterns of play
2. Walk through the positions in the analysis page to see the patterns unfold and see the full analysis context
Future implementations will show:
1. Time management
2. How you handle openings

See all of your games in a table
1. Search sort and filter games based on opponent, rating, date player, result, opening, time control, number of moves
2. Favorite games for easy access
Let’s you explore your games in an analysis page. 
1. Step through the games using the pgn viewer.
    1. Export the pgn or the position FEN for sharing.
2. Analyze the full game with the eval curve. 
    1. Analyze typical human moves from Maia engines overlayed on top of the eval curve to easily see places where a human player might go horribly wrong.
3. See your game played out on the board
    1. See your move vs the best move annotation arrows
    2. See the top move and response annotation arrows
    3. See human move annotation arrows
    4. Explore different variations by playing other moves
        1. Variations are saved to review again later
4. See your full game analysis
    1. Accuracy
    2. NAG breakdown for moves (boo moves, misses, inaccuracies, blunders, interesting moves, best move, brilliant moves, etc.)
5. See a full position analysis
    1. Move played vs best move
    2. Mistake probability for a human player at that position
    3. Stockfish lines for the top moves
    4. Human likely move distributions for ratings 1100 - 1900
    5. Engine evaluation for each move

I have some images in public/marketing that correspond to the features.