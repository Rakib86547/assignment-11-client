import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Albert Law Firm`;
    }, [title])
}
export default useTitle;