import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TicketX } from 'lucide-react'

export function MonthCanceledOrdersCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <TicketX className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1 ">
        <span className="text-2x font-bold tracking-tight"> 8</span>
        <p className="text-sm text-muted-foreground">
          {' '}
          <span className="text-emerald-500 dark:text-emerald-400"> -4%</span>{' '}
          em relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  )
}
