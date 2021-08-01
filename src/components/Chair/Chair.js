import styles from './Chair.module.css';


function Chair (ChairIt, children){
    return (
        <div>
            <span className={styles.myChair}>
                My chair
            </span> 
        </div>
        );
}

function ChairIt(){
    return(
        <span>1</span>
    )
}
export default Chair; 