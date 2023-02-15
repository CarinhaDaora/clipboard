import { Clipboard } from '@capacitor/clipboard';

export function clipboardComposable () {
    const writeToClipboard = async () => {
        await Clipboard.write({
            string: "Hello World!"
        });
    };
    
    const checkClipboard = async () => {
        const { type, value } = await Clipboard.read();
       return value;
    };
    return{
        writeToClipboard, 
        checkClipboard,
    }
}




