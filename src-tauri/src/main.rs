#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;

#[tauri::command]
fn close_splash(win: tauri::Window) {
  println!("Initializing...");
  if let Some(splashscreen) = win.get_window("splashscreen") {
    splashscreen.close().unwrap();
  }

  win.get_window("main").unwrap().show().unwrap();
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![close_splash])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
