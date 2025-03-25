package org.example.wasmexample

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material.Button
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import org.jetbrains.compose.resources.painterResource

import wasmkotlinexample.composeapp.generated.resources.Res
import wasmkotlinexample.composeapp.generated.resources.compose_multiplatform

@Composable
fun App() {
    MaterialTheme {
        var count by remember { mutableIntStateOf(0) }
        Column(Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally) {
            Button(onClick = {count ++}) {
                Text(count.toString())
            }
        }
    }
}