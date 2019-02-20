
import SampleComponent from "./components/SampleComponent"


const main = {
    init: function() {
        console.log("%cHavas Digital Factory", 'background: #ff1e2f; color: white; padding:10px;');
        console.log("%chttps://havasdigitalfactory.com", 'background: black; color: #333; padding:10px;');

        SampleComponent.init();
    }
}

export default main