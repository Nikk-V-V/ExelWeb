import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/Components/table/table.tamplate'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHtml() {
    return createTable(20)
  }
}
