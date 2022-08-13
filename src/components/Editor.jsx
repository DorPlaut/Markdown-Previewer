import React from 'react';
import { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import { BsArrowsMove } from 'react-icons/bs';
import { IoResizeOutline } from 'react-icons/io5';
import { FiMinimize2, FiMaximize2 } from 'react-icons/fi';

function Editor({ setInput, placeHolder }) {
  // set responsive position for Editor
  const [positionX, setPositionX] = useState(window.innerWidth - 380);
  const [positionY, setPositionY] = useState(window.innerHeight - 325);

  const checkPosition = () => {
    setPositionX(window.innerWidth - 380);
    setPositionX(window.innerHeight - 325);
  };
  useEffect(() => {
    window.addEventListener('resize', checkPosition);
    return () => {
      window.removeEventListener('resize', checkPosition);
    };
  }, []);

  // set Buttons
  const [isDraggBox, setIsDragBox] = useState(true);
  const [isSizeBox, setIsSizeBox] = useState(true);

  const setDragActive = () => {
    if (!isDraggBox) {
      return 'btn-active';
    } else {
      return 'btn';
    }
  };
  const setSizeActive = () => {
    if (!isSizeBox) {
      return 'btn-active';
    } else {
      return 'btn';
    }
  };
  // alternate buttons for smaller screens
  const editorBox = document.querySelector('.editor');
  const hiddenSpacer = document.querySelector('.hidden-spacer');
  const [isMinimize, setIsMinimize] = useState(true);
  const [isExpended, setIsExpended] = useState(true);

  const minimize = () => {
    setIsMinimize(!isMinimize);
    editorBox.classList.toggle('minimized');
    hiddenSpacer.classList.toggle('minimized-spacer');
  };
  const expend = () => {
    setIsExpended(!isExpended);
    editorBox.classList.toggle('expended');
    hiddenSpacer.classList.toggle('expended-spacer');
  };
  // render component
  // media quarry
  if (window.innerWidth > 700) {
    return (
      <Rnd
        default={{
          x: positionX,
          y: positionY,
          width: 350,
          height: 300,
        }}
        minWidth={200}
        minHeight={50}
        bounds="window"
        disableDragging={isDraggBox}
        enableResizing={!isSizeBox}
        className="editor-container"
      >
        <div className="editor">
          <div className="upper-bar">
            <h3>Editor</h3>
            <div className="btn-container">
              <button
                className={setSizeActive()}
                onClick={() => {
                  setIsSizeBox(!isSizeBox);
                }}
              >
                <IoResizeOutline />
              </button>
              <button
                className={setDragActive()}
                onClick={() => {
                  setIsDragBox(!isDraggBox);
                }}
              >
                <BsArrowsMove />
              </button>
            </div>
          </div>
          <div className="inside">
            <textarea
              defaultValue={placeHolder}
              id="editor"
              onChange={(event) => {
                setInput(event.target.value);
              }}
            ></textarea>
          </div>
        </div>
      </Rnd>
    );
  } else {
    return (
      <>
        <div className="editor">
          <div className="upper-bar">
            <h3>Editor</h3>
            <div className="btn-container">
              {/* expend */}
              {isExpended ? (
                <button
                  className="btn"
                  onClick={() => {
                    expend();
                  }}
                >
                  <FiMaximize2 />
                </button>
              ) : (
                <button
                  className="btn-active"
                  onClick={() => {
                    expend();
                  }}
                >
                  <FiMinimize2 />
                </button>
              )}
              {/* minimize */}
              {isMinimize ? (
                <button
                  className="btn"
                  onClick={() => {
                    minimize();
                  }}
                >
                  <FiMinimize2 />
                </button>
              ) : (
                <button
                  className="btn-active"
                  onClick={() => {
                    minimize();
                  }}
                >
                  <FiMaximize2 />
                </button>
              )}
            </div>
          </div>
          <div className="inside">
            <textarea
              defaultValue={placeHolder}
              id="editor"
              onChange={(event) => {
                setInput(event.target.value);
              }}
            ></textarea>
          </div>
        </div>
      </>
    );
  }
}

export default Editor;
