'use client';

import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { ForceGraphMethods, ForceGraphProps } from 'react-force-graph-2d';
import type { LinkObject, NodeObject } from 'force-graph';
import NavigationBar from '../components/NavigationBar';

// Dynamically import ForceGraph2D to avoid SSR issues
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false,
}) as unknown as ForwardRefExoticComponent<
  ForceGraphProps<MindbranchNode, MindbranchLink> &
  RefAttributes<ForceGraphMethods<MindbranchNode, MindbranchLink>>
>;

// Types
interface MindbranchNode extends NodeObject {
  id: string;
  name: string;
  group: string;
  val: number;
  fx?: number;
  fy?: number;
}

interface MindbranchLink extends LinkObject {
  source: string;
  target: string;
}

interface MindbranchGraphData {
  nodes: MindbranchNode[];
  links: MindbranchLink[];
}

export default function MindbranchPage() {
  const [mode, setMode] = useState<'personal' | 'public'>('personal');
  const graphRef = useRef<ForceGraphMethods<MindbranchNode, MindbranchLink> | null>(null);
  const graphContainerRef = useRef<HTMLDivElement | null>(null);
  const [graphDimensions, setGraphDimensions] = useState({ width: 0, height: 0 });
  const graphWidth = graphDimensions.width ? Math.max(graphDimensions.width - 48, 1) : 0;
  const graphHeight = graphDimensions.height ? Math.max(graphDimensions.height - 320, 1) : 0;

  // Personal data - Stacy's journal entries
  const personalData = useMemo<MindbranchGraphData>(() => ({
    nodes: [
      { id: 'center', name: 'You', group: 'center', val: 20 },
      { id: '1', name: 'Grateful for sunset', group: 'gratitude', val: 8 },
      { id: '2', name: 'Feeling overwhelmed', group: 'stress', val: 10 },
      { id: '3', name: 'Peaceful walk today', group: 'peace', val: 7 },
      { id: '4', name: 'Burnout creeping in', group: 'stress', val: 9 },
      { id: '5', name: 'Nature calms me', group: 'peace', val: 6 },
      { id: '6', name: 'Work was tough', group: 'stress', val: 8 },
      { id: '7', name: 'Thankful for this park', group: 'gratitude', val: 7 },
      { id: '8', name: 'Need more breaks', group: 'stress', val: 6 },
      { id: '9', name: 'Connected to community', group: 'gratitude', val: 8 },
    ],
    links: [
      { source: 'center', target: '1' },
      { source: 'center', target: '2' },
      { source: 'center', target: '3' },
      { source: 'center', target: '4' },
      { source: 'center', target: '5' },
      { source: 'center', target: '6' },
      { source: 'center', target: '7' },
      { source: 'center', target: '8' },
      { source: 'center', target: '9' },
      { source: '2', target: '4' }, // stress connects
      { source: '2', target: '6' },
      { source: '3', target: '5' }, // peace connects
      { source: '3', target: '7' },
      { source: '1', target: '7' }, // gratitude connects
      { source: '1', target: '9' },
    ],
  }), []);

  // Public data - Barnsdall community entries
  const publicData = useMemo<MindbranchGraphData>(() => ({
    nodes: [
      { id: 'center', name: 'Barnsdall Art Park', group: 'center', val: 25 },
      { id: '1', name: 'Nurse: Exhausted shift', group: 'stress', val: 7 },
      { id: '2', name: 'Doctor: Found peace here', group: 'peace', val: 8 },
      { id: '3', name: 'EMT: Beautiful view', group: 'gratitude', val: 6 },
      { id: '4', name: 'Nurse: Feeling alone', group: 'stress', val: 7 },
      { id: '5', name: 'Therapist: Healing space', group: 'peace', val: 8 },
      { id: '6', name: 'Surgeon: Grateful for nature', group: 'gratitude', val: 7 },
      { id: '7', name: 'Nurse: Burnout is real', group: 'stress', val: 9 },
      { id: '8', name: 'Paramedic: Sunset brought tears', group: 'gratitude', val: 8 },
      { id: '9', name: 'RN: This park saves me', group: 'peace', val: 9 },
      { id: '10', name: 'Tech: Overwhelmed today', group: 'stress', val: 6 },
      { id: '11', name: 'Counselor: Community matters', group: 'gratitude', val: 8 },
      { id: '12', name: 'Nurse: Lost a patient', group: 'grief', val: 10 },
      { id: '13', name: 'Doctor: Found hope again', group: 'hope', val: 9 },
      { id: '14', name: 'EMT: Not alone anymore', group: 'gratitude', val: 7 },
      { id: '15', name: 'Nurse: This view heals', group: 'peace', val: 8 },
      { id: '16', name: 'Therapist: Witnessing burnout', group: 'stress', val: 7 },
      { id: '17', name: 'RN: Grateful for colleagues', group: 'gratitude', val: 6 },
      { id: '18', name: 'Paramedic: Tired but hopeful', group: 'hope', val: 7 },
      { id: '19', name: 'Nurse: Park is my sanctuary', group: 'peace', val: 9 },
      { id: '20', name: 'Doctor: Grief processed here', group: 'grief', val: 8 },
    ],
    links: [
      { source: 'center', target: '1' },
      { source: 'center', target: '2' },
      { source: 'center', target: '3' },
      { source: 'center', target: '4' },
      { source: 'center', target: '5' },
      { source: 'center', target: '6' },
      { source: 'center', target: '7' },
      { source: 'center', target: '8' },
      { source: 'center', target: '9' },
      { source: 'center', target: '10' },
      { source: 'center', target: '11' },
      { source: 'center', target: '12' },
      { source: 'center', target: '13' },
      { source: 'center', target: '14' },
      { source: 'center', target: '15' },
      { source: 'center', target: '16' },
      { source: 'center', target: '17' },
      { source: 'center', target: '18' },
      { source: 'center', target: '19' },
      { source: 'center', target: '20' },
      // Connect similar themes
      { source: '1', target: '4' }, { source: '1', target: '7' }, { source: '4', target: '10' },
      { source: '2', target: '5' }, { source: '2', target: '9' }, { source: '5', target: '15' },
      { source: '3', target: '6' }, { source: '3', target: '8' }, { source: '6', target: '11' },
      { source: '12', target: '20' }, // grief
      { source: '13', target: '18' }, // hope
      { source: '14', target: '17' }, // gratitude connects
    ],
  }), []);

  const data = mode === 'personal' ? personalData : publicData;

  useEffect(() => {
    const containerEl = graphContainerRef.current;
    if (!containerEl || typeof ResizeObserver === 'undefined') {
      return;
    }

    const updateSize = () => {
      const { width, height } = containerEl.getBoundingClientRect();
      setGraphDimensions({
        width: Math.floor(width),
        height: Math.floor(height),
      });
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(containerEl);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!graphRef.current) return;
    if (!graphWidth || !graphHeight) return;

    const graphInstance = graphRef.current;
    if (typeof graphInstance.resumeAnimation === 'function') {
      graphInstance.resumeAnimation();
    }
    const chargeForce = graphInstance.d3Force('charge');
    const minDimension = Math.min(graphWidth, graphHeight);
    const chargeStrength = -Math.max(Math.round(minDimension / 4), 50);
    if (chargeForce && typeof chargeForce.strength === 'function') {
      chargeForce.strength(chargeStrength);
      const chargeForceWithDistance = chargeForce as unknown as {
        distanceMax?: (value: number) => typeof chargeForce;
        distanceMin?: (value: number) => typeof chargeForce;
      };
      if (typeof chargeForceWithDistance.distanceMax === 'function') {
        chargeForceWithDistance.distanceMax(minDimension * 0.9);
      }
      if (typeof chargeForceWithDistance.distanceMin === 'function') {
        chargeForceWithDistance.distanceMin(20);
      }
    }

    const linkForce = graphInstance.d3Force('link');
    const targetLinkDistance = Math.max(Math.round(minDimension / 5), 50);
    if (linkForce && typeof linkForce.distance === 'function') {
      linkForce.distance(targetLinkDistance);
    }

    if (typeof graphInstance.d3ReheatSimulation === 'function') {
      graphInstance.d3ReheatSimulation();
    }
    if (typeof graphInstance.centerAt === 'function') {
      graphInstance.centerAt(0, -40, 0);
    }
  }, [mode, graphWidth, graphHeight]);

  // Node color based on mood/group
  const getNodeColor = useCallback((node: MindbranchNode) => {
    if (node.group === 'center') {
      return mode === 'personal' ? '#FF8C42' : '#4A90E2'; // Orange for personal, blue for public
    }
    const colors: { [key: string]: string } = {
      gratitude: '#8BC34A',
      stress: '#FF6B6B',
      peace: '#81C784',
      grief: '#9575CD',
      hope: '#FFB74D',
    };
    return colors[node.group] || '#B0BEC5';
  }, [mode]);

  const renderNode = useCallback((node: MindbranchNode, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const baseRadius = node.id === 'center' ? 20 : 10;
    const radius = baseRadius / globalScale;
    ctx.beginPath();
    ctx.arc(node.x ?? 0, node.y ?? 0, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = getNodeColor(node);
    ctx.fill();
  }, [getNodeColor]);

  const paintNodePointerArea = useCallback((node: MindbranchNode, color: string, ctx: CanvasRenderingContext2D) => {
    const radius = node.id === 'center' ? 20 : 10;
    ctx.beginPath();
    ctx.arc(node.x ?? 0, node.y ?? 0, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
  }, []);

  // Handle node click
  const handleNodeClick = useCallback((node: MindbranchNode, _event: MouseEvent) => {
    if (node.id === 'center') return;
    alert(`Entry: ${node.name}\n\nClick to read full journal entry...`);
  }, []);

  return (
    <div className="h-full bg-gradient-to-br from-stone-50 to-amber-50 flex flex-col overflow-hidden relative">
      {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 px-6 pt-[50px]">
        <div className="flex items-center justify-between">
          {/* Back Button */}
          <Link href="/home" className="text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-[0.3em]">
              Mindbranch
            </div>
          </div>
          {/* Spacer for symmetry */}
          <div className="w-6"></div>
        </div>
        <div className="mt-4 flex justify-center">
          {/* Mode Toggle Pill */}
          <div className="bg-white rounded-full p-1 shadow-lg flex">
            <button
              onClick={() => setMode('personal')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                mode === 'personal'
                  ? 'bg-orange-400 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setMode('public')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                mode === 'public'
                  ? 'bg-blue-400 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Public
            </button>
          </div>
        </div>
      </div>

      {/* Graph Container */}
        <div ref={graphContainerRef} className="flex-1 relative overflow-hidden min-h-0 pt-[200px] pb-[160px] px-6">
        <ForceGraph2D
          ref={graphRef}
          graphData={data}
          nodeLabel="name"
          nodeColor={getNodeColor}
          nodeVal={1}
          nodeCanvasObjectMode={() => 'replace'}
          nodeCanvasObject={renderNode}
          nodePointerAreaPaint={paintNodePointerArea}
          linkColor={() => 'rgba(203,213,224,0.4)'}
          linkWidth={1.5}
          onNodeClick={handleNodeClick}
          backgroundColor="transparent"
          width={Math.max(graphWidth, 1)}
          height={Math.max(graphHeight, 1)}
          cooldownTime={3000}
          d3VelocityDecay={0.3}
          d3AlphaDecay={0.02}
          enableZoomInteraction={false}
          enablePanInteraction={false}
          onEngineStop={() => {
            // Center and fix the main node after physics settle
            const graphInstance = graphRef.current;
            if (!graphInstance) return;

            const centerNode = data.nodes.find(n => n.id === 'center');
            if (centerNode) {
              centerNode.fx = 0;
              centerNode.fy = 0;
              centerNode.x = 0;
              centerNode.y = 0;
            }

            if (typeof graphInstance.centerAt === 'function') {
              graphInstance.centerAt(0, -40, 0);
            }
            if (typeof graphInstance.zoomToFit === 'function') {
              graphInstance.zoomToFit(0, 40);
            }
            if (typeof graphInstance.pauseAnimation === 'function') {
              graphInstance.pauseAnimation();
            }
          }}
        />
      </div>

      {/* Legend */}
        <div className="absolute left-6 right-6 bottom-28 bg-white rounded-xl p-4 shadow-lg">
        <div className="text-xs font-semibold mb-2 text-gray-700">Themes</div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#8BC34A]"></div>
            <span className="text-xs text-gray-600">Gratitude</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
            <span className="text-xs text-gray-600">Stress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#81C784]"></div>
            <span className="text-xs text-gray-600">Peace</span>
          </div>
          {mode === 'public' && (
            <>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#9575CD]"></div>
                <span className="text-xs text-gray-600">Grief</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FFB74D]"></div>
                <span className="text-xs text-gray-600">Hope</span>
              </div>
            </>
          )}
        </div>
        </div>
      <NavigationBar activeRoute="/mindbranch" />
    </div>
  );
}