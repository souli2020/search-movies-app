import{useState} from"react"

export default function useHover(){
    
    const [hovered, setHovered] = useState(false)
    
    const mouseEnter =()=>{
        setHovered(true)
    }
    
     const mouseLeave =()=>{
        setHovered(false)
    }
    
    return {hovered, mouseEnter, mouseLeave}
}