import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Utensils } from 'lucide-react'

export function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1 ">
        <span className="text-2x font-bold tracking-tight"> 21</span>
        <p className="text-sm text-muted-foreground">
          {' '}
          <span className="text-rose-500 dark:text-rose-400"> -4%</span> em
          relação ao dia anterior
        </p>
      </CardContent>
    </Card>
  )
}
