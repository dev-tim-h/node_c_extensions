// hello.cc using N-API
#include <node_api.h>
#include <iostream>
#include <Windows.h>


namespace demo {



napi_value _MessageBox(napi_env env, napi_callback_info args) {
    napi_value greeting;
    napi_status status;

    MessageBox(NULL, NULL,NULL, MB_OK);
  
    //status = napi_create_string_utf8(env, "hello", NAPI_AUTO_LENGTH, &greeting);
    //if (status != napi_ok) return nullptr;
    return greeting;
  }

napi_value init(napi_env env, napi_value exports) {
  napi_status status;
  napi_value  MessageBoxFunc;


  status = napi_create_function(env, nullptr, 0, _MessageBox, nullptr, &MessageBoxFunc);
  if (status != napi_ok) return nullptr;
  status = napi_set_named_property(env, exports, "MessageBox", MessageBoxFunc);
  if (status != napi_ok) return nullptr;
  
  
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, init)

}  // namespace demo