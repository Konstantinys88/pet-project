import './home.scss';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="home">
			<div className="home__wrapper">
				<div className='home__description'>
					<p className='home__description_text'>Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Подзаголовок назад маленькая запятой свое парадигматическая своих возвращайся от всех семь, проектах переписали, точках родного пор предложения повстречался имеет, журчит большой.</p>
				</div>
				<div className='home__image-block'>
					<Image
						className='home__image-block_img'
						src="/tororo.jpg"
						width={400}
						height={400}
						alt="Picture of the author" />
				</div>
			</div>

		</div>
	)
}
