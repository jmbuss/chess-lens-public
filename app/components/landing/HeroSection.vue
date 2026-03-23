<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const pieces: Record<string, string> = {
  '1,1': '♜', '1,2': '♞', '1,3': '♝', '1,5': '♚', '1,6': '♝', '1,8': '♜',
  '2,1': '♟', '2,2': '♟', '2,3': '♟', '2,5': '♟', '2,6': '♟', '2,7': '♟', '2,8': '♟',
  '3,4': '♞', '3,6': '♛',
  '4,4': '♟',
  '5,4': '♙', '5,5': '♙',
  '6,3': '♘',
  '7,1': '♙', '7,2': '♙', '7,3': '♙', '7,6': '♙', '7,7': '♙', '7,8': '♙',
  '8,1': '♖', '8,3': '♗', '8,4': '♕', '8,5': '♔', '8,6': '♗', '8,7': '♘', '8,8': '♖',
}

function getChessPiece(row: number, col: number): string | null {
  return pieces[`${row},${col}`] || null
}

const whiteMoves = ['e4', 'd4', 'Nf3', 'Bb5', 'O-O', 'Re1', 'c3', 'h3', 'd4', 'Nbd2', 'Bc2', 'Nf1']
const blackMoves = ['e5', 'd5', 'Nc6', 'a6', 'Nf6', 'b5', 'Be7', 'O-O', 'exd4', 'Bb7', 'Re8', 'Bf8']
</script>

<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0 bg-grid opacity-40" />
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[120px]" style="background: oklch(0.696 0.17 162.48 / 4%)" />

    <div class="relative z-10 text-center max-w-4xl mx-auto">
      <div data-reveal class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-muted-foreground mb-8">
        <span class="size-2 rounded-full bg-primary animate-pulse" />
        Coming soon for macOS
      </div>

      <h1 data-reveal data-reveal-delay="1" class="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
        See your chess<br />
        <span class="text-gradient">the way it was meant<br class="hidden sm:block" /> to be seen</span>
      </h1>

      <p data-reveal data-reveal-delay="2" class="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
        A desktop analysis workstation that makes your games searchable and deeply analyzed.
        Engine precision meets human-like move prediction — so you can find patterns, understand
        your weaknesses, and actually improve.
      </p>

      <div data-reveal data-reveal-delay="3" class="flex flex-col items-center gap-4">
        <LandingEmailSignupForm />
        <a href="#problem" class="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          Learn more
          <ChevronDown class="size-4" />
        </a>
      </div>
    </div>

    <!-- App Mockup -->
    <div data-reveal data-reveal-delay="4" class="relative z-10 mt-16 w-full max-w-5xl mx-auto">
      <div class="glow-emerald rounded-xl">
        <div class="rounded-xl border border-white/10 bg-[#0d0d0d] overflow-hidden">
          <!-- Title bar -->
          <div class="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
            <div class="flex gap-1.5">
              <div class="size-3 rounded-full bg-[#ff5f57]" />
              <div class="size-3 rounded-full bg-[#febc2e]" />
              <div class="size-3 rounded-full bg-[#28c840]" />
            </div>
            <span class="text-xs text-white/30 ml-2 font-mono">Chess Lens — Game Analysis</span>
          </div>

          <!-- Dashboard content -->
          <div class="flex min-h-[240px] sm:min-h-[300px] md:min-h-[400px]">
            <!-- Move list -->
            <div class="hidden md:block w-52 p-4 border-r border-white/5">
              <div class="text-[10px] uppercase tracking-wider text-white/20 mb-3 font-mono">Moves</div>
              <div class="space-y-1.5">
                <div v-for="i in 12" :key="i" class="flex gap-3 text-xs font-mono">
                  <span class="text-white/20 w-4 text-right">{{ i }}.</span>
                  <span class="text-white/50">{{ whiteMoves[i - 1] }}</span>
                  <span class="text-white/30">{{ blackMoves[i - 1] }}</span>
                </div>
              </div>
            </div>

            <!-- Chess board -->
            <div class="flex-1 flex items-center justify-center p-4 sm:p-6">
              <div class="grid grid-cols-8 rounded overflow-hidden w-full max-w-[280px] sm:max-w-[320px] aspect-square">
                <template v-for="row in 8" :key="'r' + row">
                  <div
                    v-for="col in 8"
                    :key="'c' + col"
                    :class="(row + col) % 2 === 0 ? 'bg-emerald-800/30' : 'bg-emerald-950/40'"
                    class="aspect-square flex items-center justify-center"
                  >
                    <span v-if="getChessPiece(row, col)" class="opacity-60 text-base sm:text-xl select-none">{{ getChessPiece(row, col) }}</span>
                  </div>
                </template>
              </div>
            </div>

            <!-- Eval + Engine panel -->
            <div class="hidden lg:block w-64 p-4 border-l border-white/5">
              <div class="mb-4">
                <div class="text-[10px] uppercase tracking-wider text-white/20 mb-2 font-mono">Evaluation</div>
                <svg viewBox="0 0 200 60" class="w-full h-12">
                  <line x1="0" y1="30" x2="200" y2="30" stroke="white" stroke-opacity="0.05" />
                  <path
                    d="M0,30 C20,28 30,22 50,18 C70,14 80,25 100,35 C120,45 130,20 150,15 C170,10 180,22 200,25"
                    fill="none" stroke="oklch(0.696 0.17 162.48)" stroke-width="1.5" opacity="0.7"
                  />
                </svg>
              </div>

              <div class="space-y-2">
                <div class="text-[10px] uppercase tracking-wider text-white/20 font-mono mb-1">Stockfish 17</div>
                <div class="p-2 rounded bg-white/[0.03] border border-white/5">
                  <div class="flex justify-between text-xs">
                    <span class="text-emerald-400 font-mono font-medium">+0.3</span>
                    <span class="text-white/30 font-mono">d=32</span>
                  </div>
                  <div class="text-xs text-white/40 font-mono mt-1">Nf3 d5 c4 e6 Nc3</div>
                </div>
                <div class="p-2 rounded bg-white/[0.03] border border-white/5">
                  <div class="flex justify-between text-xs">
                    <span class="text-emerald-400 font-mono font-medium">+0.1</span>
                    <span class="text-white/30 font-mono">d=30</span>
                  </div>
                  <div class="text-xs text-white/40 font-mono mt-1">d4 Nf6 c4 g6 Nc3</div>
                </div>

                <div class="text-[10px] uppercase tracking-wider text-white/20 font-mono mt-3 mb-1">Maia 1500</div>
                <div class="p-2 rounded border" style="background: oklch(0.696 0.17 162.48 / 5%); border-color: oklch(0.696 0.17 162.48 / 10%)">
                  <div class="text-xs font-mono" style="color: oklch(0.696 0.17 162.48 / 70%)">Predicted: e5 (72%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Gradient fade at bottom -->
      <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  </section>
</template>
