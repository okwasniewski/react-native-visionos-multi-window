import SwiftUI
import React
import React_RCTSwiftExtensions

@main
struct MultiWindowAppApp: App {
  @UIApplicationDelegateAdaptor var delegate: AppDelegate
  
  @Environment(\.reactContext) private var reactContext
  
  var body: some Scene {
    RCTMainWindow(moduleName: "MultiWindowApp")
    RCTWindow(id: "Counter", sceneData: reactContext.getSceneData(id: "Counter"))
      .defaultSize(.init(width: 400, height: 600))
  }
}
