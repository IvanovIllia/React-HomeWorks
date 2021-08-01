import styles from './Sofa.module.scss';
function Sofa (){
    return (
        <div>
            <span className={styles.mySofa}>
                My chair
            </span> 
            haveIt: { props.HaveIt }
        </div>
        );
}
export default sofa;