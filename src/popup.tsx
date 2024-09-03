import { useEffect } from "react"

function Popup() {
  useEffect(() => {
    chrome.tabs.create({ url: "chrome://newtab" })
    window.close()
  }, [])

  return null
}

export default Popup
