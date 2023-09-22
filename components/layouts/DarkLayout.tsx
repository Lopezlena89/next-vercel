import { FC, PropsWithChildren } from "react"


export const DarkLayout:FC<PropsWithChildren>= ({children}) => {
  return (
    <div style={{
        backgroundColor:'rgba(255,255,255,0.3)',
        padding:'100px',
        borderRadius:'5px'
    }}>
        <h3>Dark-Layout</h3>
        <div>
            {children}
        </div>
    </div>
  )
}
