function App() {
    return (
      <div>
        <Tweet
          name="Charlie Murphy"
          username="cmurphy21"
          date={new Date().toDateString()}
          message="I hide my bones under my human's pillow!"
        />
        <Tweet
          name="Layla Houndini"
          username="lhoundini19"
          date={new Date().toDateString()}
          message="I dig holes till I find the center of the earth!"
        />
        <Tweet
          name="Arthur Hauser"
          username="ahauser84"
          date={new Date().toDateString()}
          message="These hounds eat better than I do!"
        />
      </div>
    );
  }