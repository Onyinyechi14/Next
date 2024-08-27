// pages/index.js
import styled from 'styled-components';
import Image from 'next/image';

// Import the image file from the public directory
import profilePic from '../public/profile.jpg';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      {/* Use the Next.js Image component */}
      <Image 
        src={profilePic}         // The imported image file
        alt="Profile Picture"    // Alt text for the image
        width={200}              // Desired width
        height={200}             // Desired height
      />
      <p>This is a simple portfolio page with an image.</p>
    </div>
  );
}


// Define your styled components
const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
`;

// Use the styled components within the component's JSX
export default function Home() {
  return (
    <Container>
      <Title>Welcome to My Portfolio</Title>
      <p>This is a simple portfolio page using styled-components.</p>
    </Container>
  );
}
