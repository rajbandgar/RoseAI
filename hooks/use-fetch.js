import { toast } from "sonner"

const { useState } = require("react")
const { set } = require("react-hook-form")

const useFetch = (cb) => {
    const[data,setData] = useState(null)
    const[loading,setLoading] = useState(false)
    const[error,setError] = useState(null)

    const fn = async(...args)=>{
        setLoading(true)
        setError(null)
        try {
            const response = await cb(...args)
            setData(response)
            setError(null)
        } catch (error) {
            setError(error)
            // setData(null)
             toast.error(error.message)
            
        }finally{
            setLoading(false)
        }

    }
    return {
        loading,
        data,
        error,
        fn,setData
    }
}

export default useFetch