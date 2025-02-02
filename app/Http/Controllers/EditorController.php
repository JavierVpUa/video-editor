<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\PageObject;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EditorController extends Controller
{
    public function getAll(): JsonResponse
    {
        return response()->json([
            'pages' => Page::get(),
            'pageObjects' => PageObject::get(),
        ]);
    }

    public function savePage(Request $request): JsonResponse
    {
        $row = Page::where('id', $request->id)->first();
        if (!$row) {
            $row = new Page;
        }
        if ($request->background) {
            $row->background = $request->background;
        }
        $row->save();
        return response()->json($row);
    }

    public function deletePage(Request $request): bool
    {
        return Page::where('id', $request->id)->delete();
    }

    public function savePageObject(Request $request): JsonResponse
    {
        $row = PageObject::where('id', $request->id)->first();
        if (!$row) {
            $row = new PageObject;
        }
        if ($request->next_id) {
            $row->next_id = $request->next_id;
        }
        if ($request->page_id) {
            $row->page_id = $request->page_id;
        }
        if ($request->type) {
            $row->type = $request->type;
        }
        if ($request->url) {
            $row->url = $request->url;
        }
        if ($request->px) {
            $row->px = $request->px;
        }
        if ($request->py) {
            $row->py = $request->py;
        }
        if ($request->pz) {
            $row->pz = $request->pz;
        }
        if ($request->rx) {
            $row->rx = $request->rx;
        }
        if ($request->ry) {
            $row->ry = $request->ry;
        }
        if ($request->rz) {
            $row->rz = $request->rz;
        }
        if ($request->sx) {
            $row->sx = $request->sx;
        }
        if ($request->sy) {
            $row->sy = $request->sy;
        }
        if ($request->sz) {
            $row->sz = $request->sz;
        }
        if ($request->ox) {
            $row->ox = $request->ox;
        }
        if ($request->oy) {
            $row->oy = $request->oy;
        }
        if ($request->oz) {
            $row->oz = $request->oz;
        }
        $row->save();
        return response()->json($row);
    }

    public function deletePageObject(Request $request): bool
    {
        return PageObject::where('id', $request->id)->delete();
    }
}
