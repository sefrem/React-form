import React from "react";

export default class Avatar extends React.Component {
  onChangeAvatar = e => {
    const reader = new FileReader();
    reader.onload = e => {
      this.props.onChange({
        target: {
          name: "avatar",
          value: e.target.result
        }
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { avatar, errorAvatar } = this.props;

    return (
      <div className="page3" id="page3">
        <img
          src={avatar}
          onError={e => {
            e.target.src =
              "https://uploads.codesandbox.io/uploads/user/c81c6355-3bb1-4d42-8931-f1ec1328f660/uqG7-default-avatar.png";
          }}
          alt=""
          className="avatar mb-4"
        />
        <div className="input-group mb-4">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="file"
              onChange={this.onChangeAvatar}
            />
            <label
              className={
                errorAvatar
                  ? "custom-file-label border-danger"
                  : "custom-file-label"
              }
              htmlFor="file"
            >
              Choose avatar
            </label>
          </div>
          {errorAvatar ? (
            <div className="invalid-feedback">{errorAvatar}</div>
          ) : null}
        </div>
      </div>
    );
  }
}
