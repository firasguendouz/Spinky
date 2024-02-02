// featuredNFTsSection.jsx

import './featuredNFTsSection.css';

const FeaturedNFTsSection = () => {
  // Replace the following with your actual NFT data
  const TeamNFTs = [
    { id: 1, image: '/src/assets/demon1.png', title: 'Spinky NFT 1', twitter: '@nftuser1', jobTitle: 'Artist', description: 'Passionate artist creating unique Spinky NFTs.' },
    { id: 2, image: '/src/assets/demon2.png', title: 'Spinky NFT 2', twitter: '@nftuser2', jobTitle: 'Developer', description: 'Innovative developer shaping the Spinky experience.' },
    { id: 3, image: '/src/assets/demon3.png', title: 'Spinky NFT 3', twitter: '@nftuser3', jobTitle: 'Community Manager', description: 'Engaging with the Spinky community and ensuring a vibrant space.' },
    { id: 4, image: '/src/assets/demon1.png', title: 'Spinky NFT 4', twitter: '@nftuser4', jobTitle: 'Designer', description: 'Crafting visually stunning Spinky NFTs for collectors.' },
  ];

  return (
    <section className="featured-nfts-section">
      <div className="gallery">
        {TeamNFTs.map((nft) => (
          <div key={nft.id} className="nft-item">
            <img src={nft.image} alt={nft.title} />
            <div className="overlay">
              <h3>{nft.title}</h3>
              <p>{nft.jobTitle}</p>
              <p>{nft.description}</p>
              <a href={`https://twitter.com/${nft.twitter}`} target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedNFTsSection;
