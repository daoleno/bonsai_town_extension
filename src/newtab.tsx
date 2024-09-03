import { useEffect } from "react"

function NewTab() {
  useEffect(() => {
    document.title = "New Tab"
    const iframe = document.createElement("iframe")
    iframe.src = "https://bonsai.town"
    iframe.style.position = "fixed"
    iframe.style.top = "0"
    iframe.style.left = "0"
    iframe.style.width = "100%"
    iframe.style.height = "100%"
    iframe.style.border = "none"
    document.body.appendChild(iframe)
  }, [])

  return null
}

export default NewTab