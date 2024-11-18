import { Home, Pizza, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AccountMenu } from './account-menu'
import { ThemeToggle } from './theme/theme-toggle'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="w-6 h-6" />
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Button variant={'ghost'} asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Início
            </Link>
          </Button>

          <Button variant={'ghost'} asChild>
            <Link to="/orders" className="flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              Pedidos
            </Link>
          </Button>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
