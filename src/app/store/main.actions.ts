export class AddImage {
  static readonly type = '[Main] Add Image';
  constructor(public image: File) {}
}

export class ClearImage {
  static readonly type = '[Main] Clear Image';
}

export class GetIdentificationResults {
  static readonly type = '[Main] Get Identification Results';
  constructor(public image: File) {}
}

export class ClearResults {
  static readonly type = '[Main] Clear Results';
}
