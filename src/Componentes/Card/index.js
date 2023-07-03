import styles from './styles.module.css'

const card = ({titulo, icono, descripcion}) => {
   //JS
   return(//JSX
       <>
           <div className="col-lg-3 col-md-6">
               <div className={styles.styles_sectionCardContainer__8EyGy}>
                   <div className={styles.styles_sectionCardContent__RZN1B}>
                       <i>{icono}</i>
                       <h2>{titulo}</h2>
                       <p>{descripcion}</p>
                   </div>
               </div>
           </div>

       </>
   )
}

export default card