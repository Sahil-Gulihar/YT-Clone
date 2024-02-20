import {VideoCard} from "../components/VideoCard";
const VIDEOS = [{
    title: "We Rollin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Narendra Modi",
    views:"420k",
}, {
    title: "We Bollin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Rahul Gandhi",
    views:"420k",
}, {
    title: "We Collin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Mommy Banerjee",
    views:"420k",
},
{
    title: "We Bollin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Rahul Gandhi",
    views:"420k",
},
{
    title: "We Bollin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Rahul Gandhi",
    views:"420k",
},
{
    title: "We Rollin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Narendra Modi",
    views:"420k",
}, {
    title: "We Bollin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Rahul Gandhi",
    views:"420k",
}, {
    title: "We Collin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Mommy Banerjee",
    views:"420k",
},
{
    title: "We Rollin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Narendra Modi",
    views:"420k",
}, {
    title: "We Bollin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Rahul Gandhi",
    views:"420k",
}, {
    title: "We Collin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Mommy Banerjee",
    views:"420k",
},{
    title: "We Rollin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Narendra Modi",
    views:"420k",
}, {
    title: "We Bollin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Rahul Gandhi",
    views:"420k",
}, {
    title: "We Collin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Mommy Banerjee",
    views:"420k",
},
{
    title: "We Rollin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Narendra Modi",
    views:"420k",
}, {
    title: "We Bollin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Rahul Gandhi",
    views:"420k",
}, {
    title: "We Collin' ???",
    thumbnail: "photo.webp",
    image:"file.enc",
    timeStamp:"9 years ago",
    author:"Mommy Banerjee",
    views:"420k",
},
]

export const VideoGrid=()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div> 
            <VideoCard
                title={video.title}
                thumbnail={video.thumbnail}
                image={video.image}
                timeStamp={video.timeStamp}
                author={video.author}
                views={video.views}
                ></VideoCard> 
        </div>)}
    </div>
}