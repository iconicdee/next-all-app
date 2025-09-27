import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Threadbuild from "../Threadbill-component"
import WordComponent from "../word-component";
import MethodPage from "../4SA-method";

const assets = [
	{
		"asset_id": 18883,
		"asset_title": "Technical Project Management",
        "src": "/Group 1735.png",
		"asset_description": "Description: Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
		"asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
		"asset_type": "display_asset",
		"asset_content_type": "video"
	},
	{
		"asset_id": 18884,
		"asset_title": "Threadbuild",
        "src": "/Group 1735.png",
		"asset_description": "Description: Watch the video and thread build, and jot out key threads while watching that video.",
		"asset_content": " ",
		"asset_type": "input_asset",
		"asset_content_type": "threadbuilder"
	},
	{
		"asset_id": 18885,
		"asset_title": "Structure you pointers ",
        "src": "/Group 1735.png",
		"asset_description": "Description: Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
		"asset_content": " ",
		"asset_type": "input_asset",
		"asset_content_type": "article1"
	},
	{
		"asset_id": 18886,
        "src": "/Group 1735.png",
		"asset_title": "4SA Method",
		"asset_description": "Description: To explore more read more",
		"asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
		"asset_type": "display_asset",
		"asset_content_type": "article2"
	}
]

const CardComponent = () => {
	return (
		<div className="flex flex-wrap gap-6 p-0">
			{assets.map(asset => (
				<div key={asset.asset_id} className="w-[480px] relative h-[580px] border border-gray-100 rounded-lg shadow-sm">
					<CardHeader>
                            <div className="flex absolute items-center justify-between top-0 left-0 mb-4 bg-[#000] p-3 mt-0 w-full rounded-t-xl">
                            <CardTitle className="text-white justify-center ml-12 text-sm">{asset.asset_title}</CardTitle>
                            <div className=" flex justify-end">
                               <span className="rounded-full bg-gray-400 inline-block mt-2">
                              <img src={asset.src} alt={asset.asset_title} className="w-8" />  
                            </span> 
                            </div>
                            
                            
                        </div>
						
                           
						{/* Optional: Add CardAction if you have actions */}
					</CardHeader>
                        <div className=" w-full  mt-4 ">
                         <CardDescription className="mt-7 text-[14px] text-gray-600 text-[16px] font-semibold">
							{asset.asset_description}
						</CardDescription>
						{/* Show video if content_type is video */}
						{asset.asset_content_type === "video" && asset.asset_content.trim() && (
                            <div className="mt-4">
                                <iframe
                                    src={asset.asset_content.trim()}
                                    title={asset.asset_title}
                                    className="w-full h-[291px] rounded"
                                    allowFullScreen
                                />  
                            </div>
							
						)}
						{/* Show link if content_type is article and has content */}
						{asset.asset_content_type === "article" && asset.asset_content.trim() && (
							<a
								href={asset.asset_content.trim()}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 underline"
							>
								Read Article
							</a>
						)}
						{
							asset.asset_content_type === "threadbuilder" && (
								<div className="mt-2">
									<Threadbuild />
								</div>
							)
						}
						{
							asset.asset_content_type === "article1" && (
								<div className="mt-4 border border-gray-300 rounded-md w-full py-6">
										<WordComponent />
								</div>
							)
						}
						{
							asset.asset_content_type === "article2" && (
								<div className="mt-4 border border-gray-300 rounded-md w-full py-6">
										<MethodPage />
								</div>
							)
						}
					</div>
				</div>
			))}
		</div>
	)
}

export default CardComponent
