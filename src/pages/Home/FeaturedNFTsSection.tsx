import './featuredNFTsSection.css';

const FeaturedNFTsSection = () => {
  // Replace the following with your actual NFT data
  const featuredNFTs = [
    { id: 1, image: '../Assets/286.png', title: 'Spinky NFT 1' },
    { id: 2, image: '../Assets/286.png', title: 'Spinky NFT 2' },
    // Add more NFT data as needed
  ];

  return (
    <section className="featured-nfts-section">
      <div className="gallery">
        {featuredNFTs.map((nft) => (
          <div key={nft.id} className="nft-item">
            <img src={nft.image} alt={nft.title} />
            <div className="overlay">
              <h3>{nft.title}</h3>
              {/* Add other information about the NFT if needed */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedNFTsSection;
