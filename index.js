const winItem = 2000
const startingPrice = 200
let finalBuyPrice = 0
let currentPrice = 0
let inputBid = document.getElementById("bid-now")
let currentBid = document.getElementById("current-bid")
let alert = document.getElementById("alert-message")
let btnClick = document.getElementById("btn-click")



function bid()
{

  if(inputBid.value > startingPrice)

  {
        if (inputBid.value > currentPrice && inputBid.value < winItem)
        {
          currentBid.textContent = inputBid.value
          currentPrice = inputBid.value
          alert.textContent = ""

        }

        else if(inputBid.value < currentPrice || inputBid.value === currentPrice )
        {
          alert.textContent = "YOU HAVE TO BID MORE THAN THE CURRENT BID TO PURCHASE"
        }

        else if(inputBid.value >= winItem){
          currentPrice = inputBid.value
          finalBuyPrice = currentPrice
          alert.textContent = "You Win This Item"
          currentBid.textContent = inputBid.value
          btnClick.style.display = "none"

        }
  }

  else if(inputBid.value < startingPrice || inputBid.value === startingPrice)
  {
  alert.textContent = "YOU HAVE TO BID MORE THAN THE STARTING PRICE"
  }
}

