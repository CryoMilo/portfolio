import { useEffect, useRef } from "react";
import Image from "next/image";
import { BsCameraVideoOff, BsMicMute } from "react-icons/bs";
import { MdOutlineCallEnd } from "react-icons/md";

const OutgoingCallModal = ({ isOpen, onClose }) => {
	const audioRef = useRef(null);

	// Play sound when modal mounts
	useEffect(() => {
		if (isOpen) {
			audioRef.current = new Audio("/audios/discord-call-sound.mp3");
			audioRef.current.loop = true; // Loop sound if needed
			audioRef.current.play();
		}

		// Stop sound on unmount or when modal is closed
		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.currentTime = 0; // Reset to start
			}
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
			<div className="bg-white text-black rounded-lg shadow-lg w-96 py-12">
				{/* Call Body */}
				<div className="flex flex-col items-center justify-center p-6">
					{/* Ripple Effect Container */}
					<div className="relative w-36 h-36 mb-4 flex items-center justify-center">
						{/* Ripple Animation */}
						<div className="absolute w-20 h-20 rounded-full bg-secondary opacity-50 animate-ping"></div>
						<div className="absolute w-20 h-20 rounded-full bg-primary-light opacity-50 animate-ping delay-500"></div>

						{/* Avatar */}
						<div className="relative w-24 h-24 rounded-full overflow-hidden bg-secondary z-10">
							<Image
								src="/images/profile-background.jpg"
								alt="profile-pic"
								fill
								className="object-cover"
							/>
						</div>
					</div>
					<h2 className="text-xl font-semibold mb-2">Oak Soe Htoo Aung</h2>
					<p className="text-gray-400 mb-6">Calling...</p>
				</div>

				{/* Call Actions */}
				<div className="flex justify-center gap-6 pb-4">
					{/* Mute */}
					<button className="flex items-center justify-center w-12 h-12 bg-secondary hover:bg-gray-500 rounded-full">
						<BsMicMute />
					</button>
					{/* Video Off */}
					<button className="flex items-center justify-center w-12 h-12 bg-secondary hover:bg-gray-500 rounded-full">
						<BsCameraVideoOff />
					</button>
					{/* End Call */}
					<button
						onClick={onClose}
						className="flex items-center justify-center w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full">
						<MdOutlineCallEnd />
					</button>
				</div>
			</div>
		</div>
	);
};

export default OutgoingCallModal;
