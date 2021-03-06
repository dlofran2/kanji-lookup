import React from 'react';
import PropTypes from 'prop-types';

import speaker from './assets/speaker.svg';

import './KanjiData.css';

class KanjiData extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    error: PropTypes.string.isRequired,
  }

  playAudio(audio) {
    new Audio(audio).play()
  }

  render() {
    const { data, error } = this.props;

    return (
      <div className="center">
        {data.length > 0 &&
          data.map((kanji, i) => {
            return (
              <div className="kanjiGrid" key={i}>
                <div className="kanjiCharacterSection">
                  <p className="kanjiCharacter">{kanji.kanji.character}</p>
                  <p className="kanjiMeaning">{kanji.kanji.meaning.english}</p>
                </div>
                <div className="kanjiPronunciation">
                  <div className="kanjiOnKun">
                    <p>Kunyomi&nbsp;</p>
                    <p>Onyomi&nbsp;</p>
                  </div>
                  <div className="kanjiOnKunData">
                    <p>{kanji.kanji.kunyomi.hiragana}</p>
                    <p>{kanji.kanji.onyomi.katakana}</p>
                  </div>
                </div>
                <div className="kanjiRadical"> 
                  {kanji.radical.character} ({kanji.radical.name.hiragana})
                  <br />
                  {kanji.radical.meaning.english}
                </div>
                <div className="strokeOrder">
                  <b>Stroke Order</b>
                </div>
                <div className="kanjiSteps">
                  <br />
                  {kanji.kanji.strokes.images.map((image, j) => {
                    return (
                      <div className="kanjiStepOuter" key={j}>
                        <img className="kanjiStepInner" src={image} alt="stroke order" />
                      </div>
                    );
                  })}
                </div>
                <div className="kanjiExample">
                  {kanji.examples.map((example, k) => {
                    return (
                      <div className="exampleOuter" key={k}>
                        <button className="speakerLocation" onClick={() => this.playAudio(example.audio.mp3)}>
                          <img className="speaker" src={speaker} alt="Play" />
                        </button>
                        <div className="exampleDataKanji">
                          {example.japanese}
                          <br />
                          {example.meaning.english}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="bottomBorder"></div>
              </div>
            );
          })
        }

        {error !== '' &&
          <span>
            <p>{error}</p>
            <p>Please try again.</p>
          </span>
        }
      </div>
    );
  }
}

export default KanjiData;
