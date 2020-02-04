import { execFileSync } from 'child_process'

export function print_radare2_version(): void {
  console.log(execFileSync('r2', ['-v'], { encoding: 'utf-8' }))
}

export function print_banner(): void {
  const BANNER = ` ▄       ▄  ▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄
▐░▌     ▐░▌▐░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 ▐░▌   ▐░▌▐░█░█▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌
  ▐░▌ ▐░▌ ▐░▌▐░▌    ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌
   ▐░▐░▌  ▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌
    ▐░▌   ▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌
   ▐░▌░▌  ▐░▌   ▐░▌ ▐░▌▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀█░█▀▀ ▐░▌       ▐░▌
  ▐░▌ ▐░▌ ▐░▌    ▐░▌▐░▌▐░▌     ▐░▌  ▐░▌     ▐░▌  ▐░▌       ▐░▌
 ▐░▌   ▐░▌▐░█▄▄▄▄▄█░█░▌▐░▌      ▐░▌ ▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌
▐░▌     ▐░▌▐░░░░░░░░░▌ ▐░▌       ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌
 ▀       ▀  ▀▀▀▀▀▀▀▀▀   ▀         ▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀ `

  console.log(BANNER)
  print_radare2_version()
}
