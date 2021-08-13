class BaseRestController {
  constructor() {
      this.successCode = 200;
      this.errorCode = 500;
  }

  responseWithResult(res, statusCode) {
      return ({ data, contentType = null}) => {
          res.status(statusCode || this.successCode);
          if (!!contentType) {
              res.contentType(contentType);
              res.send(data);
          } else {
              res.send({ data });
          }
      }
  }

  responseWithError(res) {
      return (entity) => {
          const { errorCode = this.errorCode, message = '' } = (typeof entity === 'object' && !!entity ? entity : { message: entity });
          res.status(errorCode).send({message});
      }
  }
}

module.exports = BaseRestController;
