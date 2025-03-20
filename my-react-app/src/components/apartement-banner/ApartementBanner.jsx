import React, { useState } from 'react'
import './ApartementBanner.scss'


export function ApartementBanner(props) {

	const pictures = props.imageArrey;

	const [ currentPic, setCurrentPic] = useState(0)

	const getClassName = (i) => {
		if (i === currentPic) {
			return "show";
		}
		else{
			return "";
		}
	}

	const moveToNext = () => {
		if (currentPic + 1 >= pictures.length) {
			setCurrentPic(0); 
		} else {
			setCurrentPic(currentPic + 1);
		}
	};

	const moveToPrevious = () => {
		if (currentPic === 0) {
			setCurrentPic(pictures.length - 1); 
		} else {
			setCurrentPic(currentPic - 1);
		}
	};

	const arePicturesAvailable = () => {
		return pictures && pictures.length > 0;
	};

	const getCarouselOrDefaultImage = () => {
		if(!pictures || pictures.length === 0) {
			return <img src='https://picsum.photos/1080' className='show' alt=''></img>
		}
		return pictures.map((pic, i) => (
					<img key={pic} src={pic} alt='' className={getClassName(i)}></img>
				))
	};


  return (
	    <div className='apartement-banner'>
			<div className='image-container'>{getCarouselOrDefaultImage()}</div>
				{ arePicturesAvailable() && (
					<>
						<button className='btn btn-previous' onClick={moveToPrevious}>
							<i class="fa-solid fa-chevron-left"></i>
						</button>
						<button className='btn btn-next' onClick={moveToNext}>
							<i class="fa-solid fa-chevron-right"></i>
						</button>
					</>
				)}
			</div>
  )
}

