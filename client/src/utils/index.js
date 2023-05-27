import { surpriseMePrompts } from "../constants";
import FileSaver from 'file-saver'
export function getRandomPrompt(prompt)
{
    const randomNumber=Math.floor(Math.random()*surpriseMePrompts.length)
    const randomPrompt=surpriseMePrompts[randomNumber];
    if(randomPrompt===prompt) return getRandomPrompt(promp);
    return randomPrompt
}
export async function downloadImage(_id,photo)
{
    FileSaver.saveAs(photo,`download-${_id}.jpg`)
}