import './Chair';
import '../sofa/sofa';
import '../table/table';
import '../wardrobe/wardrobe';
import '../Appartments/Appartments';

class myRoom extends Appartments {
    render() {
    return <div> My room </div>;
    }
}

export default myRoom;