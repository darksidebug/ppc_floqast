
import floQastImage from "./img/img.jpg"
import floQastLogo from "./img/Layer 53.png"

function App() {
	return (
		<div className="container mx-auto px-4">
			<div className="flex justify-center">
				<div className="w-12/12 lg:w-8/12">
					<div className="relative mt-20 shadow-xl">
						<img className="w-full border border-gray-200 rounded-xl" src={ floQastImage } alt="FloQast_Image" />
						<div className="absolute top-20 left-0.5 py-6 bg-gradient-to-r from-gray-100 to-transparent">
							<div className="ml-32 mb-2">
								<div className="relative">
									<img className="w-40 opacity-100" src={ floQastLogo } alt="FloQast_Logo" />
									<i className="absolute top-5 right-32 text-xl font-bold text-gray-600">The</i>
									<i className="text-3xl font-bold text-green4">Fastest, Most Accurate</i><br/>
									<i className="text-xl font-bold text-gray-600">Way to Close Your Books!</i>
								</div>
							</div>
						</div>
						<div className="bg-white">
							<div className="overflow-hidden flex justify-center -mt-36">
								<div className="relative z-30">
									<div className="overflow-hidden py-5 pl-6 pr-3 bg-green4 rounded-tl rounded-bl
											after:absolute after:-top-[2.8rem] after:-right-2 after:-z-20 after:content-[''] after:h-[11.1rem] after:w-[11.1rem] after:rounded
											after:bg-green4 after:rotate-45">
										<h1 className="text-lg font-semibold text-center text-white">SCHEDULE A DEMO</h1>
										<h3 className="mb-1 text-sm font-medium text-center text-gray-100">Learn More About FloQast.</h3>
									</div>
								</div>
								<div className="py-2 pl-14 pr-4 bg-white rounded-tr rounded-br">
									<h1 className="mb-3 text-center">
										<span className="inline-block text-sm font-medium text-gray-600">Learn How FloQast Can</span>
										<span className="inline-block ml-1 text-sm font-medium text-green4">Improve Your Month-End</span>
									</h1>
									<input className="py-1 px-2 border border-gray-200 rounded text-sm" type="text" placeholder="First Name*" />
									<input className="ml-1 py-1 px-2 border border-gray-200 rounded text-sm" type="email" placeholder="Email*" />
									<button className="ml-1 rounded border border-green4 bg-green4 text-white py-1 px-4 text-sm">SCHEDULE NOW</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
	);
}

export default App;
