
// @ts-check
const TypingArea = ({ message, setMessage, onSubmit, onFileOpened }) => (
  <div className="p-3 chat-input-section">
    <form className="row" onSubmit={onSubmit}>
      <div className="col">
        <div className="position-relative">
          <div style={{ 
            display: 'flex',
            flexDirection: 'row'
          }}>
            <input
              value={message.message}
              onChange={(e) => {
                console.log("message: ", message);
                setMessage({ ...message, 'message': e.target.value  })
              }}
              type="text"
              placeholder="Enter Message..."
              className="form-control chat-input"
            />
            <input type="file" name="file" id="file" onChange={onFileOpened} />
            <span class="material-symbols-outlined">
              attach_file
            </span>
          </div>
          {/**/}
        </div>
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="btn btn-primary btn-rounded chat-send w-md"
        >
          <span className="d-none d-sm-inline-block mr-2">Send</span>
          <svg width={13} height={13} viewBox="0 0 24 24" tabIndex={-1}>
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="white" />
          </svg>
        </button>
      </div>
    </form>
  </div>
);

export default TypingArea;
