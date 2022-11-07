export function currencyFormat(currency) {
    return '$' + currency.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}