export function VideoCard(props: any) {
    return <div className="p-2 cursor-pointer">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <img src={props.thumbnail} alt="Thumbnail" className="rounded-xl"/>
        </a>
        <div className="grid grid-cols-12  pt-2">
            <div className="col-span-1 ">
            <img src= {props.image} alt="Pfp" className="rounded-full w-20 h-18"/>
            </div>
            
            <div className="col-span-11 pl-3">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <div>
                {props.title}
                </div>
                </a>
                <div className="col-span-11 text-gray-500 text-base">
                {props.author}
                </div>
                <div className="col-span-11 text-gray-500 text-base">
                {props.views} | {props.timeStamp}
                </div>
            </div>
            

        </div>
    </div>
}
